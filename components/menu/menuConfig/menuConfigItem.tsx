import {
    YoutubeFilled,
    FireFilled,
    ClockCircleOutlined,
    VideoCameraOutlined,
    PlayCircleOutlined,
    SmileOutlined,
    DesktopOutlined,
    AppstoreOutlined,
    TrophyOutlined,
    HeartOutlined,
    BookOutlined,
    FolderOpenOutlined,
    PlusSquareOutlined
} from "@ant-design/icons";

type MenuItemType = {
    key?: string
    label: string
    description?: string
    path?: string
    icon?: any
    children?: MenuItemType[]
    type?: "group"
}

export const menuConfigItem: MenuItemType[] = [
    {
        key: "/",
        label: "Asosiy bo‘lim",
        description: "Ushbu bo‘limda siz filmlar, seriallar va boshqa kontentlarni tomosha qilishingiz mumkin.",
        path: "/",
        icon: <YoutubeFilled />,
    },
    {
        key: "mustwatch",
        label: "Tomosha qilishingiz kerak",
        description: `Bu bo‘limda siz eng muhim va tavsiya etilgan filmlar va seriallarni topishingiz mumkin, ular tomosha qilishga albatta arziydi.`,
        path: "/mustwatch",
        icon: <PlayCircleOutlined />,
    },
    {
        key: "popular",
        label: "Ko'p marta ko‘rilgan",
        description: "Eng ko‘p tomosha qilingan filmlar va seriallar ro‘yxati. Foydalanuvchilar orasida eng mashhurlari shu yerda.",
        path: "/popular",
        icon: <FireFilled />,
    },
    {
        key: "latest",
        label: "So‘nggi qo‘shilgan",
        description: "Eng so‘nggi qo‘shilgan filmlar, seriallar va boshqa kontentlar bilan tanishing. Har doim yangilangan materiallar.",
        path: "/latest",
        icon: <PlusSquareOutlined />,
    },
    {
        key: "movies",
        label: "Filmlar (Kinolar)",
        description: "Turli janrdagi filmlar – action, comedy, drama va boshqa kategoriyalar bo‘yicha keng tanlov.",
        path: "/movies",
        icon: <VideoCameraOutlined />,
        children: [
            { key: "movies-action", label: "Action", description: "Tezkor va harakatga boy filmlar.", path: "/movies/action" },
            { key: "movies-comedy", label: "Comedy", description: "Kulgi va kayfiyatni ko‘taruvchi komediyalar.", path: "/movies/comedy" },
            { key: "movies-drama", label: "Drama", description: "His-tuyg‘ularni uyg‘otuvchi dramatik filmlar.", path: "/movies/drama" },
        ],
    },
    {
        key: "serials",
        label: "Seriallar",
        description: "Sevimli seriallar va yangi seriyalarni shu bo‘limda kuzatib borishingiz mumkin.",
        path: "/serials",
        icon: <PlayCircleOutlined />,
    },
    {
        key: "cartoons",
        label: "Multfilmlar",
        description: "Bolalar va kattalar uchun eng yaxshi multfilmlar to‘plami.",
        path: "/cartoons",
        icon: <SmileOutlined />,
    },
    {
        key: "tv",
        label: "Onlayn TV",
        description: "Turli telekanallarni onlayn tomosha qilish imkoniyati.",
        path: "/tv",
        icon: <DesktopOutlined />,
    },
    {
        key: "apps",
        label: "Soft (Dasturlar)",
        description: "Foydali dasturlar va ilovalar to‘plami. Turli platformalar uchun mos.",
        path: "/apps",
        icon: <AppstoreOutlined />,
    },
    {
        key: "games",
        label: "O‘yinlar",
        description: "Eng so‘nggi va mashhur o‘yinlar, turli janrlar va platformalar uchun.",
        path: "/games",
        icon: <AppstoreOutlined />,
    },

    // ---------- USER SECTION ----------
    {
        type: "group",
        label: "Foydalanuvchilarga",
    },
    {
        key: "bookmarks",
        label: "Zakladki",
        description: "Siz belgilab qo‘ygan sevimli filmlar va seriallar ro‘yxati.",
        path: "/bookmarks",
        icon: <BookOutlined />,
    },
    {
        key: "history",
        label: "Avval ko‘rilganlar",
        description: "Siz ilgari tomosha qilgan filmlar va seriallarning tarixchasi.",
        path: "/history",
        icon: <ClockCircleOutlined />,
    },
    {
        key: "favorites",
        label: "Sizning filmlar ro‘yxati",
        description: "Siz yaratgan shaxsiy filmlar ro‘yxati va tavsiya qilingan kontent.",
        path: "/favorites",
        icon: <HeartOutlined />,
    },
    {
        key: "collections",
        label: "Kolleksiyalar",
        description: "Turli mavzularda yoki janrlarda to‘plangan filmlar va seriallar kolleksiyasi.",
        path: "/collections",
        icon: <FolderOpenOutlined />,
    },
    {
        key: "top100",
        label: "TOP-100",
        description: "Foydalanuvchilar orasida eng mashhur va eng yuqori baholangan 100 ta kontent ro‘yxati.",
        path: "/top100",
        icon: <TrophyOutlined />,
    },
];
