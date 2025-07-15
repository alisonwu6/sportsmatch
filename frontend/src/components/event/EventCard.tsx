import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Users, Clock, Star } from 'lucide-react'
import { EventCardProps } from '@/interfaces/event'

export default function EventCard({
  title,
  location,
  time,
  joinedCount,
  maxCount,
  timeLeft,
  host,
  tags,
  participants,
}: EventCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto p-4 shadow-xl rounded-2xl border border-gray-200">
      <CardContent className="space-y-3">
        {/* Title and Time Left */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            {title} | {location}
          </div>
          <Badge variant="secondary">Starts in {timeLeft}</Badge>
        </div>

        {/* Time and Participant Count */}
        <div className="flex items-center text-sm text-gray-600 space-x-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {time}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {joinedCount} / {maxCount} players
          </div>
        </div>

        {/* Host Information */}
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={host.avatarUrl} />
            <AvatarFallback>{host.name}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            😎 {host.name} ({host.tag})
          </div>
        </div>

        {/* Activity Tags */}
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Past Participants */}
        <div className="flex -space-x-2">
          {participants.map((avatarUrl, index) => (
            <Avatar
              key={index}
              className="w-7 h-7 border"
            >
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{index + 1}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-2">
          <Button
            className="w-full"
            variant="default"
          >
            Join Now
          </Button>
          <Button
            variant="ghost"
            className="ml-2"
          >
            <Star className="w-4 h-4 mr-1" /> Save
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
