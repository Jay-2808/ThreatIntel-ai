from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from datetime import datetime
from typing import Optional
from .models.user import User, UserCreate

# MongoDB connection
MONGODB_URL = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGODB_URL)
db = client.threatintel_db

async def get_user_by_email(email: str) -> Optional[User]:
    user_dict = await db.users.find_one({"email": email})
    if user_dict:
        user_dict["id"] = str(user_dict.pop("_id"))
        return User(**user_dict)
    return None

async def create_user(user_data: UserCreate, hashed_password: str) -> User:
    user_dict = user_data.dict()
    user_dict["hashed_password"] = hashed_password
    user_dict["created_at"] = datetime.utcnow()
    user_dict["last_login"] = None

    result = await db.users.insert_one(user_dict)
    user_dict["id"] = str(result.inserted_id)
    del user_dict["password"]  # Remove plain password before returning

    return User(**user_dict)

async def update_user_last_login(user_id: str, last_login: datetime):
    await db.users.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {"last_login": last_login}}
    )

async def get_user_by_id(user_id: str) -> Optional[User]:
    user_dict = await db.users.find_one({"_id": ObjectId(user_id)})
    if user_dict:
        user_dict["id"] = str(user_dict.pop("_id"))
        return User(**user_dict)
    return None
