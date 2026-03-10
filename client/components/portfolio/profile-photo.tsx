import Image from "next/image";

type ProfilePhotoProps = {
  name: string;
  profileImage?: string;
  initials: string;
};

export function ProfilePhoto({ name, profileImage, initials }: ProfilePhotoProps) {
  return (
    <div className="profile-frame h-20 w-20 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-strong)]">
      {profileImage ? (
        <Image
          src={profileImage}
          alt={`Foto de ${name}`}
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-mono text-lg text-[var(--muted)]">
          {initials || "DEV"}
        </div>
      )}
    </div>
  );
}
