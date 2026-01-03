import './NoteCard.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

function NoteCard({ note }){
    return(
    <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
            <CardTitle className="text-xl">{note.title}</CardTitle>
            <CardDescription>{note.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex gap-2">
            <Badge variant="secondary">{note.department}</Badge>
            <Badge variant="outline">Year {note.year}</Badge>
            </div>
        </CardContent>
        <CardFooter>
            <a href={note.file_url} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full">
                View Notes
                <ExternalLink className="ml-2 h-4 w-4" />
            </Button></a>
        </CardFooter>
    </Card>
    );
}

export default NoteCard