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
    icon?: string;
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
    notes: string;
  };
  skills: {
    languages: string[];
    frameworksAndTools: string[];
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
    institution: "Trường Đại học Công nghệ Đồng Nai",
    degree: "Cử nhân",
    major: "Công nghệ thông tin",
    period: "2022 - 2026",
    languageProficiency: "Tiếng Anh — Trình độ B2",
    notes: "Tập trung chuyên sâu về Kiến trúc phần mềm, Phát triển Web Fullstack và Hệ thống phân tán.",
  },
  skills: {
    languages: [
      "TypeScript",
      "JavaScript",
      "C#",
      "Java",
      "C++",
      "HTML5",
      "CSS3",
    ],
    frameworksAndTools: [
      "Next.js",
      "ASP.NET Core MVC",
      "React Native",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
    ],
    categories: [
      {
        category: "Ngôn ngữ lập trình",
        description: "Tư duy thuật toán vững chắc và kiểm soát kiểu dữ liệu nghiêm ngặt",
        items: [
          { name: "TypeScript / JavaScript", highlight: true },
          { name: "C#", highlight: true },
          { name: "Java", highlight: false },
          { name: "C++", highlight: false },
          { name: "HTML5 & CSS3", highlight: false },
        ],
      },
      {
        category: "Frameworks & Nền tảng",
        description: "Hệ sinh thái hiện đại tối ưu hiệu năng và trải nghiệm người dùng",
        items: [
          { name: "Next.js (App Router)", highlight: true },
          { name: "ASP.NET Core MVC", highlight: true },
          { name: "React Native", highlight: false },
          { name: "Tailwind CSS", highlight: true },
        ],
      },
      {
        category: "Backend, Database & Cloud",
        description: "Triển khai dịch vụ đám mây, cơ sở dữ liệu thời gian thực và tự động hóa CI/CD",
        items: [
          { name: "Supabase (PostgreSQL)", highlight: true },
          { name: "Vercel Platform", highlight: true },
          { name: "RESTful API Architecture", highlight: false },
          { name: "Git & Version Control", highlight: false },
        ],
      },
    ],
  },
  projects: [
    {
      id: "dntu-forum",
      title: "DNTU-FORUM",
      subtitle: "Nền tảng mạng xã hội sinh viên & Tiện ích học đường thông minh",
      role: "Fullstack Developer",
      period: "09/2026 - 11/2026",
      isFeatured: true,
      highlight: "Dự án tâm huyết và thời gian làm lâu nhất",
      summary:
        "Nền tảng web cộng đồng toàn diện dành riêng cho sinh viên với đầy đủ hệ sinh thái: diễn đàn hỏi đáp, marketplace đồ cũ, tìm trọ, tra cứu xe buýt và kết nối câu lạc bộ.",
      description:
        "DNTU-FORUM được thiết kế và xây dựng như một hub thông tin duy nhất giải quyết tất cả nhu cầu học tập và sinh hoạt của sinh viên. Hệ thống kết hợp kiến trúc Next.js App Router hiệu năng cao cùng backend Supabase xử lý realtime, xác thực phân quyền và lưu trữ đám mây.",
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
          category: "Deployment & DevOps",
          items: ["Vercel CI/CD", "Edge CDN", "Automated Analytics"],
        },
      ],
      demoUrl: "https://dntu-forum.vercel.app",
      githubUrl: "https://github.com/kyrishaki1105",
      stats: [
        { label: "Mô-đun chức năng", value: "5+ Phân hệ chính" },
        { label: "Thời gian triển khai", value: "3 Tháng chuyên sâu" },
        { label: "Điểm Lighthouse", value: "98/100" },
      ],
    },
  ],
  hobbies: [
    {
      name: "Cầu lông",
      description: "Rèn luyện thể lực, phản xạ nhanh và tinh thần chiến thuật đồng đội trên sân đấu.",
      iconName: "Activity",
    },
    {
      name: "Lập trình",
      description: "Đam mê khám phá công nghệ mới, xây dựng các side project giải quyết vấn đề thực tế.",
      iconName: "Code2",
    },
    {
      name: "Chụp ảnh",
      description: "Lưu giữ góc nhìn thẩm mỹ, chi tiết ánh sáng và cảm xúc của nhịp sống xung quanh.",
      iconName: "Camera",
    },
  ],
  quickStats: [
    { label: "Niên khóa", value: "2022-2026", detail: "ĐH Công nghệ Đồng Nai" },
    { label: "Dự án trọng điểm", value: "DNTU-FORUM", detail: "Fullstack Web Platform" },
    { label: "Ngoại ngữ", value: "Tiếng Anh B2", detail: "Giao tiếp & Tài liệu kỹ thuật" },
    { label: "Trạng thái", value: "Open to Work", detail: "Fullstack / Frontend / Backend" },
  ],
};
