import { useState } from 'react';
import { usePWA } from '@/hooks/use-pwa';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function PWAInstall() {
  const { isInstallable, installApp } = usePWA();
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleInstall = async () => {
    const installed = await installApp();
    if (!installed) {
      setShowModal(true);
    }
    setShowBanner(false);
  };

  if (!isInstallable || !showBanner) {
    return null;
  }

  return (
    <>
      <div className="bg-primary text-primary-foreground p-3 text-center text-sm relative" data-testid="pwa-install-banner">
        <span>📱 Install our app for the best experience!</span>
        <Button 
          variant="link" 
          className="ml-2 text-primary-foreground hover:text-primary-foreground/80 p-0 h-auto font-normal underline"
          onClick={handleInstall}
          data-testid="button-install-pwa"
        >
          Install Now
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 h-6 w-6 p-0"
          onClick={() => setShowBanner(false)}
          data-testid="button-dismiss-banner"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-md" data-testid="dialog-pwa-install">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Install the App to Continue
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">iOS (Safari)</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. Tap <strong>Share</strong> in Safari.</li>
                <li>2. Choose <strong>Add to Home Screen</strong>.</li>
                <li>3. Open the app from your Home Screen.</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Android (Chrome)</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. Tap <strong>⋮</strong> (Menu) in Chrome.</li>
                <li>2. Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>
                <li>3. Open the app from your Home Screen.</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Desktop</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. Click the <strong>Install</strong> icon in the address bar.</li>
                <li>2. Launch the installed app.</li>
              </ol>
            </div>
          </div>
          
          <Button 
            onClick={() => setShowModal(false)} 
            className="w-full"
            data-testid="button-pwa-continue"
          >
            I've installed — continue
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
