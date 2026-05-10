# Data Stores

## Supabase
Primary structured app data target:
- users
- products
- jobs
- videos
- publish mappings

## MongoDB
Secondary/flexible storage target for:
- signup metadata
- raw provider payload archives
- experimental documents

## Current implementation state
- Supabase client scaffolded
- Mongo client scaffolded
- user creation writes can target both when configured
