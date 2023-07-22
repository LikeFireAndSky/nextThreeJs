import { MongoClient } from "mongodb";

// MONGODB_URI 환경 변수가 정의되어 있지 않으면 에러를 던집니다.
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// MONGODB_URI 환경 변수의 값을 uri 변수에 할당합니다.
const uri : string = process.env.MONGODB_URI;

let client : MongoClient; // MongoClient 객체를 저장할 변수
let connectDB : Promise<MongoClient>; // Promise<MongoClient>를 저장할 변수

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서는 HMR (Hot Module Replacement)로 인해 모듈 리로드가 발생해도
  // 값이 보존되도록 global 변수를 사용합니다.

  let globalWithMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    // _mongoClientPromise이 정의되지 않은 경우에만 MongoClient 인스턴스를 생성하고 연결합니다.
    client = new MongoClient(uri);
    globalWithMongoClientPromise._mongoClientPromise = client.connect();
  }

  connectDB = globalWithMongoClientPromise._mongoClientPromise;
} else {
  // 프로덕션 환경에서는 global 변수를 사용하지 않는 것이 좋습니다.
  // 각각의 함수에서 공유하기 위해 새로운 MongoClient 인스턴스를 생성하고 연결합니다.
  client = new MongoClient(uri);
  connectDB = client.connect();
}

// 모듈 스코프의 MongoClient 프로미스를 내보냅니다.
// 이렇게 별도의 모듈에서 처리함으로써, 클라이언트는 함수 간에 공유될 수 있습니다.
export { connectDB };