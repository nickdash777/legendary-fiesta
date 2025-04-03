ALTER TABLE profiles
ADD COLUMN email_notifications BOOLEAN DEFAULT true,
ADD COLUMN dark_mode BOOLEAN DEFAULT false; 