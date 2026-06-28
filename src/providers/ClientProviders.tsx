
import { AppProvider, ScrollSmoothProvider, VideoProvider } from "@/providers";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import { AnimationWrapper } from "@/components/wrappers";
import ScrollToTopProvider from "./ScrollToTopProvider";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AppProvider>
            <ScrollSmoothProvider>
                <ScrollToTopProvider>
                    <VideoProvider>
                        <AnimationWrapper>
                            {/* Global UI Elements */}
                            <div className="px-blur-bottom" />
                            <BackToTop />
                            {children}
                        </AnimationWrapper>
                    </VideoProvider>
                </ScrollToTopProvider>
            </ScrollSmoothProvider>
        </AppProvider>
    );
}