import MainLayout from '@/layouts/MainLayout'
import EventList from '@/components/event/EventCardList'

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="text-xl font-bold mb-4">Open Games</h1>
      <EventList />
    </MainLayout>
  )
}
