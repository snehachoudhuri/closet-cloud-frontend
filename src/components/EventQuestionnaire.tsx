import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  gender: z.string({
    required_error: "Please select your gender",
  }),
  location: z.string({
    required_error: "Please enter your location",
  }),
  eventType: z.string({
    required_error: "Please select an event type",
  }),
  occasion: z.string({
    required_error: "Please select an occasion",
  }),
  dresscode: z.string({
    required_error: "Please select a dress code",
  }),
  vibe: z.string({
    required_error: "Please select the desired vibe",
  }),
  date: z.string({
    required_error: "Please select the date",
  }),
  time: z.string({
    required_error: "Please select the time",
  }),
});

export type EventQuestionnaireData = z.infer<typeof formSchema>;

interface EventQuestionnaireProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: EventQuestionnaireData) => void;
  onSkip: () => void;
}

export function EventQuestionnaire({ open, onOpenChange, onSubmit, onSkip }: EventQuestionnaireProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm<EventQuestionnaireData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "",
      location: "",
      eventType: "",
      occasion: "",
      dresscode: "",
      vibe: "",
      date: "",
      time: "",
    },
  });

  const handleSubmit = async (data: EventQuestionnaireData) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Plan Your Outfit</DialogTitle>
          <DialogDescription className="space-y-2">
            <p>Tell us about your event to get personalized outfit recommendations.</p>
            <p className="text-sm text-muted-foreground">You can also skip this step to get smart recommendations based on:</p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>Current weather conditions</li>
              <li>Your upcoming calendar events</li>
              <li>Your style preferences</li>
            </ul>
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="non-binary">Non-binary</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="formal">Formal Event</SelectItem>
                          <SelectItem value="business">Business Meeting</SelectItem>
                          <SelectItem value="casual">Casual Outing</SelectItem>
                          <SelectItem value="party">Party</SelectItem>
                          <SelectItem value="date">Date Night</SelectItem>
                          <SelectItem value="outdoor">Outdoor Activity</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="occasion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occasion</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="dinner">Dinner</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="graduation">Graduation</SelectItem>
                          <SelectItem value="concert">Concert</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dresscode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dress Code</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select dress code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blacktie">Black Tie</SelectItem>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="semiformal">Semi-Formal</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="smart">Smart Casual</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vibe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Vibe</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select vibe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elegant">Elegant & Sophisticated</SelectItem>
                          <SelectItem value="professional">Professional & Polished</SelectItem>
                          <SelectItem value="trendy">Trendy & Fashion-Forward</SelectItem>
                          <SelectItem value="relaxed">Relaxed & Comfortable</SelectItem>
                          <SelectItem value="edgy">Edgy & Bold</SelectItem>
                          <SelectItem value="minimalist">Minimalist & Clean</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onSkip}
                className="flex items-center gap-2"
              >
                <span>Use Weather & Calendar</span>
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="min-w-[160px]"
              >
                {loading ? "Getting Recommendations..." : "Get Event Recommendations"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}