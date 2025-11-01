import { Container, LoadingSpinner } from "@/components/ui";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container className="flex flex-col items-center justify-center py-20">
        <LoadingSpinner className="h-12 w-12 text-primary-500" />
        <p className="mt-6 text-gray-600">正在加载内容，请稍候...</p>
      </Container>
    </main>
  );
}
