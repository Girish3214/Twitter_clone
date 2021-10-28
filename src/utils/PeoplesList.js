export const FamousList = [
  {
    name: "thaman S",
    isVerified: true,
    imageUrl: "/images/logo192.png",
    twitterName: "@MusicThaman",
    description:
      "music composer, Drummer in Indian film industry / Cricketer music composer, Drummer in Indian film industry / Cricketer music composer, Drummer in Indian film industry / Cricketer music composer, Drummer in Indian film industry / Cricketer",
    followers: 1900000,
    following: 354,
    friendsFollowing: ["name_is_Girish", "Itachi"],
  },
  {
    name: "thaman S",
    isVerified: false,
    imageUrl: "/images/logo192.png",
    twitterName: "@MusicThaman",
    description: "music composer, Drummer",
    followers: 1900000,
    following: 354,
  },
  {
    name: "thaman S",
    isVerified: true,
    imageUrl: "/images/logo192.png",
    twitterName: "@MusicThaman",
    description: "music composer, Drummer in Indian film industry / Cricketer",
    followers: 1900000,
    following: 354,
  },
  {
    name: "thaman S",
    isVerified: true,
    imageUrl: "/images/logo192.png",
    twitterName: "@MusicThaman",
    description: "music composer, Drummer in Indian film industry / Cricketer",
    followers: 1900000,
    following: 354,
  },
  {
    name: "thaman S",
    isVerified: true,
    imageUrl: "/images/logo192.png",
    twitterName: "@MusicThaman",
    description: "music composer, Drummer in Indian film industry / Cricketer",
    followers: 1900000,
    following: 354,
  },
];

function intlFormat(num) {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
}

export const converter = (num) => {
  if (num >= 1000000) return intlFormat(num / 1000000) + "M";
  if (num >= 1000) return intlFormat(num / 1000) + "k";
  return intlFormat(num);
};
