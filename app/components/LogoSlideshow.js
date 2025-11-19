export default function LogoSlideshow() {
  const sharpStyle = { 
    filter: 'contrast(1.05) brightness(1.02) saturate(1.05)', 
    imageRendering: 'auto'
  };

  return (
    <div className="overflow-hidden mb-6">
      <div className="flex animate-slide-fast gap-8 items-center">
        <div className="shrink-0 p-2">
          <img 
            src="/google-analytics.png" 
            alt="Google Analytics - Track A/B test results" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/wordPress.png" 
            alt="WordPress - A/B test your WordPress website easily" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/squarespace.png" 
            alt="Squarespace - A/B test your Squarespace website" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/shopify.png" 
            alt="Shopify - A/B test your Shopify store" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <div className="text-black text-lg font-semibold whitespace-nowrap">
            And more...
          </div>
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/webflow.png" 
            alt="Webflow - A/B test your Webflow site" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <div className="text-black text-lg font-semibold whitespace-nowrap">
            And more...
          </div>
        </div>
        <div className="shrink-0 p-2">
          <div className="w-20 h-10"></div>
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="shrink-0 p-2">
          <img 
            src="/google-analytics.png" 
            alt="Google Analytics - Track A/B test results" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/wordPress.png" 
            alt="WordPress - A/B test your WordPress website easily" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/squarespace.png" 
            alt="Squarespace - A/B test your Squarespace website" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/shopify.png" 
            alt="Shopify - A/B test your Shopify store" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <div className="text-black text-lg font-semibold whitespace-nowrap">
            And more...
          </div>
        </div>
        <div className="shrink-0 p-2">
          <img 
            src="/webflow.png" 
            alt="Webflow - A/B test your Webflow site" 
            className="h-10 w-auto object-contain"
            style={sharpStyle}
          />
        </div>
        <div className="shrink-0 p-2">
          <div className="text-black text-lg font-semibold whitespace-nowrap">
            And more...
          </div>
        </div>
        <div className="shrink-0 p-2">
          <div className="w-20 h-10"></div>
        </div>
      </div>
    </div>
  );
}