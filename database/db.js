import { MongoClient } from "mongodb"

let db = null;

export const connectDB = async () => {
  try {
    //이미연결된경우
    if (db) return db

    //DB연결
    const MONGODB_URI = process.env.MONGODB_URI_ATLAS;
    // const MONGODB_URI = process.env.NODE_ENV === "development" ? process.env.MONGODB_URI_LOCAL : process.env.MONGODB_URI_ATLAS
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log("MongoDB 연결 성공!")
    db = client.db(process.env.DB_NAME);

    return db
  } catch (error) {
    console.log("MongoDB 연결실패", error)
    process.exit(1)
  }

  }