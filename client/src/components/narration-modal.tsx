import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Volume1, Play, Pause, Download, X } from "lucide-react";
import type { AIModel } from "@shared/schema";

interface NarrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedText: string;
  defaultModel: AIModel;
}

export default function NarrationModal({ 
  isOpen, 
  onClose, 
  selectedText,
  defaultModel 
}: NarrationModalProps) {
  const [audioUrl, setAudioUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<string>("alloy");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const generateNarrationMutation = useMutation({
    mutationFn: async (data: { 
      selectedText: string; 
      voice: string;
    }) => {
      const response = await fetch("/api/generate-narration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate narration: ${errorText || response.statusText}`);
      }
      
      const result = await response.json();
      return result;
    },
    onSuccess: (response: any) => {
      if (response.audioUrl) {
        setAudioUrl(response.audioUrl);
        toast({
          title: "Narration Generated",
          description: "Your audio narration has been created successfully!",
        });
      }
      setIsGenerating(false);
    },
    onError: (error: any) => {
      console.error("Narration generation failed:", error);
      setIsGenerating(false);
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate narration. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGenerate = () => {
    if (!selectedText.trim()) {
      toast({
        title: "No Text Selected",
        description: "Please select some text first.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setAudioUrl("");

    generateNarrationMutation.mutate({
      selectedText,
      voice: selectedVoice,
    });
  };

  const handlePlayPause = () => {
    if (!audioUrl) return;

    if (!audio) {
      const newAudio = new Audio(audioUrl);
      newAudio.onended = () => setIsPlaying(false);
      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  const handleClose = () => {
    // Stop and cleanup audio if playing
    if (audio) {
      audio.pause();
      setAudio(null);
    }
    setIsPlaying(false);
    setAudioUrl("");
    setIsGenerating(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Volume1 className="h-5 w-5" />
            <span>Generate Narration</span>
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute right-4 top-4"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Selected Text Preview */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Selected Text</h3>
            <ScrollArea className="h-24 w-full rounded border bg-blue-50 dark:bg-blue-900/20 p-3">
              <div className="text-sm text-blue-700 dark:text-blue-300">
                {selectedText.substring(0, 500)}
                {selectedText.length > 500 && "..."}
              </div>
            </ScrollArea>
          </div>

          {/* Voice Selection */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Voice Selection</h3>
            <Select value={selectedVoice} onValueChange={setSelectedVoice}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a voice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alloy">Alloy (Neutral)</SelectItem>
                <SelectItem value="echo">Echo (Male)</SelectItem>
                <SelectItem value="fable">Fable (British Male)</SelectItem>
                <SelectItem value="onyx">Onyx (Deep Male)</SelectItem>
                <SelectItem value="nova">Nova (Young Female)</SelectItem>
                <SelectItem value="shimmer">Shimmer (Soft Female)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Narration (same voice as podcast) - Direct text-to-speech conversion
            </p>
          </div>

          {/* Generation Button */}
          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? "Generating Narration..." : "Generate Narration"}
          </Button>

          {/* Narration Result */}
          {(audioUrl || isGenerating) && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Your Narration</h3>
                {audioUrl && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handlePlayPause}>
                      {isPlaying ? (
                        <Pause className="h-4 w-4 mr-1" />
                      ) : (
                        <Play className="h-4 w-4 mr-1" />
                      )}
                      {isPlaying ? "Pause" : "Play"}
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={audioUrl} download={`narration-${new Date().toISOString().split('T')[0]}.mp3`}>
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              {isGenerating ? (
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-3 text-sm text-gray-600">
                    Generating audio narration...
                  </span>
                </div>
              ) : (
                audioUrl && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      ✅ Your audio narration has been generated successfully! Use the Play button above to listen.
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}