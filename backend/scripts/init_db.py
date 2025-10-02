from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
from passlib.context import CryptContext

# MongoDB connection
MONGODB_URL = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGODB_URL)
db = client.threatintel_db

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def create_admin_user():
    # Check if admin user already exists
    admin = await db.users.find_one({"email": "admin@threatintel.ai"})
    if admin:
        print("Admin user already exists")
        return

    # Create admin user
    admin_user = {
        "email": "admin@threatintel.ai",
        "name": "Admin User",
        "role": "admin",
        "hashed_password": pwd_context.hash("admin123"),  # Change this password in production
        "created_at": datetime.utcnow(),
        "last_login": None
    }

    result = await db.users.insert_one(admin_user)
    print(f"Created admin user with ID: {result.inserted_id}")

if __name__ == "__main__":
    import asyncio
    asyncio.run(create_admin_user())
    print("Database initialization completed")
