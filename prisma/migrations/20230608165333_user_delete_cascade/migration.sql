-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userPreferenceId_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "UserPreference"("id") ON DELETE CASCADE ON UPDATE CASCADE;
