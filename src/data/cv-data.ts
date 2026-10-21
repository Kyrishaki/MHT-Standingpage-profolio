export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  isFeatured: boolean;
  highlight: string;
  summary: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  demoUrl: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface CVData {
  personal: {
    fullName: string;
    title: string;
    englishTitle: string;
    bio: string;
    avatarUrl: string;
    status: string;
    location: string;
    phone: string;
    email: string;
    socialHandle: string;
    github: string;
  };
  education: {
    institution: string;
    degree: string;
    major: string;
    period: string;
    languageProficiency: string;
    ieltsScore: string;
    notes: string;
  };
  skills: {
    languages: string[];
    database: string[];
    frameworksAndTools: string[];
    softSkills: string[];
    categories: SkillCategory[];
  };
  projects: ProjectDetail[];
  hobbies: {
    name: string;
    description: string;
    iconName: string;
  }[];
  quickStats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export const cvData: CVData = {
  personal: {
    fullName: "MAI HOÀNG TUẤN",
    title: "LẬP TRÌNH VIÊN FULLSTACK",
    englishTitle: "Fullstack Developer",
    bio: "Là một Fullstack Developer đam mê công nghệ, tôi luôn chủ động học hỏi, thích nghi nhanh và không ngừng nâng cao kỹ năng chuyên môn. Tôi có khả năng làm việc nhóm, điều phối các dự án quy mô nhỏ và giải quyết vấn đề một cách linh hoạt. Với tinh thần trách nhiệm và tính kỷ luật cao, tôi chú trọng chất lượng sản phẩm, hiệu quả công việc và sự phát triển bền vững trong lĩnh vực công nghệ thông tin.",
    avatarUrl: "/avatar.png",
    status: "Sẵn sàng nhận cơ hội việc làm mới",
    location: "Biên Hòa, Đồng Nai",
    phone: "0865846074",
    email: "mhtuan.work@gmail.com",
    socialHandle: "@kyrishaki1105",
    github: "https://github.com/kyrishaki1105",
  },
  education: {
    institution: "Trường Đại học Công Nghệ Đồng Nai",
    degree: "Cử nhân",
    major: "Công nghệ thông tin",
    period: "2022 - 2026",
    languageProficiency: "Tiếng Anh — Trình độ B2",
    ieltsScore: "IELTS 5.5",
    notes: "Tập trung chuyên sâu về Kiến trúc phần mềm, Lập trình ứng dụng phân tán và Công nghệ Web.",
  },
  skills: {
    languages: ["C++", "C#", "Java", "HTML", "CSS", "JS/TS"],
    database: ["SQL Server", "Supabase (PostgreSQL)"],
    frameworksAndTools: [
      "Next.js",
      "ASP.NET Core MVC",
      "React Native",
      "Tailwind CSS",
      "Wordpress",
      "Vercel",
    ],
    softSkills: ["Làm việc nhóm", "Thích nghi nhanh", "Tư duy phân tích"],
    categories: [
      {
        category: "Ngôn ngữ lập trình",
        description: "Nền tảng thuật toán hướng đối tượng vững chắc và lập trình web hiện đại",
        items: [
          { name: "JS/TS", highlight: true },
          { name: "C#", highlight: true },
          { name: "Java", highlight: false },
          { name: "C++", highlight: false },
          { name: "HTML & CSS", highlight: false },
        ],
      },
      {
        category: "Cơ sở dữ liệu (Database)",
        description: "Thiết kế quan hệ dữ liệu, truy vấn tối ưu và hệ thống realtime",
        items: [
          { name: "SQL Server", highlight: true },
          { name: "Supabase (PostgreSQL)", highlight: true },
        ],
      },
      {
        category: "Frameworks & Công nghệ",
        description: "Hệ sinh thái Microsoft và JavaScript Fullstack hiện đại",
        items: [
          { name: "Next.js (App Router)", highlight: true },
          { name: "ASP.NET Core MVC", highlight: true },
          { name: "Wordpress", highlight: false },
          { name: "React Native", highlight: false },
          { name: "Tailwind CSS", highlight: true },
          { name: "Vercel", highlight: true },
        ],
      },
      {
        category: "Kỹ năng cá nhân",
        description: "Năng lực làm việc nhóm và phẩm chất phát triển bền vững",
        items: [
          { name: "Làm việc nhóm", highlight: true },
          { name: "Thích nghi nhanh", highlight: true },
          { name: "Tư duy phân tích", highlight: true },
        ],
      },
    ],
  },
  projects: [
    {
      id: "dntu-forum",
      title: "DNTU-FORUM",
      subtitle: "Nền tảng web cộng đồng sinh viên & Tiện ích học đường thông minh",
      role: "Fullstack Developer (Team Leader)",
      period: "09/2026 - 11/2026",
      isFeatured: true,
      highlight: "Dự án tâm huyết và thời gian làm lâu nhất",
      summary:
        "Quản lý và hợp tác với 3 thành viên để tập luyện cách quản lý nhóm và xây dựng hoàn thiện một dự án web cộng đồng toàn diện tích hợp hỏi đáp, chợ đồ cũ, tìm trọ, xe buýt và câu lạc bộ.",
      description:
        "DNTU-FORUM là dự án tâm huyết quy mô nhất của tôi, nơi tôi đảm nhiệm vai trò Fullstack Developer kiêm điều phối nhóm 3 thành viên. Hệ thống giải quyết các bài toán thiết thực cho sinh viên bằng kiến trúc Next.js App Router kết hợp cơ sở dữ liệu Supabase Realtime, bảo mật RLS và triển khai tự động trên Vercel.",
      features: [
        {
          title: "Thảo luận & Hỏi đáp (Q&A)",
          description:
            "Không gian trao đổi học thuật, bài giảng, tài liệu ôn thi với cơ chế bình chọn, gắn thẻ môn học và thông báo đẩy theo thời gian thực.",
          icon: "MessageSquare",
        },
        {
          title: "Chợ trao đổi đồ cũ (Marketplace)",
          description:
            "Kênh mua bán, sang nhượng giáo trình, dụng cụ học tập và thiết bị điện tử an toàn, tiện lợi giữa các sinh viên trong trường.",
          icon: "ShoppingBag",
        },
        {
          title: "Tìm bạn cùng phòng & Nhà trọ",
          description:
            "Hệ thống đăng tin tìm bạn trọ tương thích lối sống, cùng chuyên mục đánh giá review chất lượng phòng trọ khu vực lân cận.",
          icon: "Home",
        },
        {
          title: "Tra cứu Lịch xe buýt",
          description:
            "Tích hợp lộ trình, trạm dừng và thời gian các tuyến buýt kết nối trường với các trạm trung chuyển trọng điểm tại Biên Hòa và TP.HCM.",
          icon: "Bus",
        },
        {
          title: "Danh bạ Câu lạc bộ (CLB)",
          description:
            "Tổng hợp tin tức, sự kiện tuyển thành viên và thông tin hoạt động của toàn bộ câu lạc bộ học thuật, thể thao và nghệ thuật.",
          icon: "Users",
        },
      ],
      techStack: [
        {
          category: "Frontend",
          items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
          category: "Backend & Data",
          items: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Edge Functions"],
        },
        {
          category: "Deployment & Team",
          items: ["Vercel CI/CD", "Team Git Flow (3 thành viên)", "Edge CDN"],
        },
      ],
      demoUrl: "https://dntu-forum.vercel.app",
      githubUrl: "https://github.com/kyrishaki1105",
      stats: [
        { label: "Quy mô nhóm", value: "3 Thành viên" },
        { label: "Thời gian triển khai", value: "09/2026 - 11/2026" },
        { label: "Điểm Lighthouse", value: "98/100" },
      ],
    },
    {
      id: "veg4t",
      title: "Veg4t",
      subtitle: "Website Nội Dung & Thương Mại Điện Tử WordPress",
      role: "Wordpress Developer",
      period: "09/2026 - 11/2026",
      isFeatured: false,
      highlight: "Làm quen và sử dụng thuần thục WordPress CMS",
      summary:
        "Dự án thực tế rèn luyện kỹ năng xây dựng, tùy biến theme và quản trị website trên hệ thống mã nguồn mở WordPress phục vụ phân phối nội dung và kinh doanh sản phẩm.",
      description:
        "Trong dự án Veg4t, tôi đã nghiên cứu sâu về kiến trúc WordPress CMS, từ cấu hình cơ sở dữ liệu MySQL, tối ưu tốc độ tải trang, tùy biến child-theme đến việc tích hợp các plugin quản trị và bảo mật. Dự án giúp tôi làm chủ toàn diện quy trình triển khai nhanh website cho khách hàng.",
      features: [
        {
          title: "Quản trị nội dung chuyên nghiệp",
          description: "Cấu hình danh mục sản phẩm, bài viết blog chuẩn SEO và giao diện thân thiện với thiết bị di động.",
          icon: "Layers",
        },
        {
          title: "Tối ưu hóa tốc độ & Cache",
          description: "Áp dụng các kỹ thuật nén ảnh WebP, tối ưu asset CSS/JS và thiết lập bộ nhớ đệm hiệu quả.",
          icon: "Zap",
        },
      ],
      techStack: [
        {
          category: "Platform",
          items: ["WordPress", "PHP", "MySQL", "CSS3 / HTML5"],
        },
        {
          category: "Tools & SEO",
          items: ["Yoast SEO", "WooCommerce", "LiteSpeed Cache"],
        },
      ],
      demoUrl: "https://dntu-forum.vercel.app",
      githubUrl: "https://github.com/kyrishaki1105",
      stats: [
        { label: "Thời gian làm", value: "09/2026 - 11/2026" },
        { label: "Vai trò", value: "Wordpress Dev" },
        { label: "Mục tiêu", value: "Thuần thục CMS" },
      ],
    },
    {
      id: "web-mvc",
      title: "WEB MVC (Microsoft Tech)",
      subtitle: "Hệ thống Web Kiến trúc ASP.NET Core MVC & SQL Server",
      role: "Fullstack Developer",
      period: "08/2025 - 11/2025",
      isFeatured: false,
      highlight: "Dự án hoàn thiện theo công nghệ Microsoft đạt điểm 8",
      summary:
        "Xây dựng hoàn thiện 1 dự án phần mềm dựa theo toàn bộ ngăn xếp công nghệ của Microsoft (ASP.NET Core MVC, Entity Framework, SQL Server) và đạt điểm số 8 xuất sắc.",
      description:
        "Dự án được phát triển theo mô hình MVC (Model-View-Controller) chặt chẽ, áp dụng kiến trúc đa tầng (Multi-tier Architecture), thiết kế cơ sở dữ liệu quan hệ trên Microsoft SQL Server, chuẩn hóa ràng buộc dữ liệu và xử lý bảo mật phân quyền tài khoản người dùng.",
      features: [
        {
          title: "Kiến trúc ASP.NET Core MVC",
          description: "Tách bạch rõ ràng Controller, View và Model, hỗ trợ Dependency Injection và xử lý nghiệp vụ tin cậy.",
          icon: "Cpu",
        },
        {
          title: "Cơ sở dữ liệu SQL Server",
          description: "Thiết kế schema chuẩn hóa (3NF), viết Stored Procedures tối ưu hóa và tương tác qua Entity Framework Core.",
          icon: "Database",
        },
        {
          title: "Đạt thành tích Điểm 8",
          description: "Được hội đồng giảng viên đánh giá cao về tính hoàn thiện, mã nguồn sạch và khả năng vận hành ổn định.",
          icon: "Award",
        },
      ],
      techStack: [
        {
          category: "Backend",
          items: ["C#", "ASP.NET Core MVC", ".NET Core", "Entity Framework"],
        },
        {
          category: "Database",
          items: ["Microsoft SQL Server", "T-SQL", "Stored Procedures"],
        },
        {
          category: "Frontend",
          items: ["Razor Views", "Bootstrap / CSS3", "JavaScript"],
        },
      ],
      demoUrl: "https://dntu-forum.vercel.app",
      githubUrl: "https://github.com/kyrishaki1105",
      stats: [
        { label: "Thời gian làm", value: "08/2025 - 11/2025" },
        { label: "Điểm đánh giá", value: "Điểm 8/10" },
        { label: "Hệ sinh thái", value: "Microsoft .NET" },
      ],
    },
  ],
  hobbies: [
    {
      name: "Cầu lông",
      description: "Rèn luyện thể lực, phản xạ nhanh nhẹn và tinh thần đồng đội chiến thuật trên sân đấu.",
      iconName: "Activity",
    },
    {
      name: "Lập trình",
      description: "Đam mê sáng tạo công nghệ mới, xây dựng các dự án web giải quyết vấn đề thực tế.",
      iconName: "Code2",
    },
    {
      name: "Chụp ảnh",
      description: "Ghi lại góc nhìn nghệ thuật, chi tiết ánh sáng và khoảnh khắc chân thực của cuộc sống.",
      iconName: "Camera",
    },
  ],
  quickStats: [
    { label: "Niên khóa", value: "2022 - 2026", detail: "ĐH Công Nghệ Đồng Nai" },
    { label: "Dự án chính", value: "DNTU-FORUM", detail: "Team Leader & Fullstack" },
    { label: "Ngoại ngữ", value: "B2 (IELTS 5.5)", detail: "Tài liệu kỹ thuật & Giao tiếp" },
    { label: "Trạng thái", value: "Open to Work", detail: "Sẵn sàng làm việc" },
  ],
};
