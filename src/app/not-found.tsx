import { redirect } from 'next/navigation';

export default function NotFoundOriginalPage() {
  redirect('/404');
}
