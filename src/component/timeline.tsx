interface TimelineItem {
    title: string
    organization: string
    date: string
    description: string
  }
  
  interface TimelineProps {
    items: TimelineItem[]
  }
  
  export default function Timeline({ items }: TimelineProps) {
    return (
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 pb-4">
            <div className="absolute left-0 top-0 h-full w-px bg-border"></div>
            <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
            <div className="space-y-1">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{item.organization}</span>
                <span className="mx-2">•</span>
                <span>{item.date}</span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  