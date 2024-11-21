import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
export default function Apply() {

  return (
    <div>
      <form>
      <Card>
        <CardHeader>
          <CardDescription><label className="quizLabel">A person enters a residence without permission and steals jewelry worth $10,000. Under NRS 205.060, what crime has been committed, and what are the potential penalties for burglary involving theft exceeding $3,500?</label></CardDescription>
        </CardHeader>
        <CardContent>
        <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Petty Larceny; punishable by up to 6 months in jail and fines up to $1,000.</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Burglary; punishable by 1-10 years in prison and fines up to $10,000.</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Trespassing; punishable by a $500 fine and no jail time.</Label>
        </div>
        </RadioGroup>
        </CardContent>
      </Card>
      </form>
    </div>
  );
}
