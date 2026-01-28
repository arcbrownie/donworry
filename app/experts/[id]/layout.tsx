import { Metadata } from "next";
import { getExpertById, experts } from "@/lib/experts";

type Props = {
  params: Promise<{ id: string }>;
};

// Static export를 위한 generateStaticParams
export function generateStaticParams() {
  return experts.map((expert) => ({
    id: expert.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const expert = getExpertById(id);
  
  if (!expert) {
    return {
      title: "자문단을 찾을 수 없습니다 | 돈워리",
    };
  }

  return {
    title: `${expert.name} ${expert.title} | 돈워리 자문단`,
    description: expert.bio,
    alternates: {
      canonical: `https://donworry.kr/experts/${id}`,
    },
    openGraph: {
      title: `${expert.name} ${expert.title} | 돈워리 자문단`,
      description: expert.bio,
      url: `https://donworry.kr/experts/${id}`,
    },
  };
}

export default function ExpertDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
