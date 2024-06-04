import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from "./database/app.module";

@Module({
    imports: [UsersModule, DatabaseModule],
})
export class AppModule {}
