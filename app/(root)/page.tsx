import TradingViewWidget from "@/components/TradingViewWidget"
// import { Button } from "@/components/ui/button"
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants"

const Home = () => {
  const scripturl = "https://s3.tradingview.com/external-embedding/embed-widget-"
  return (
    <>
      <div className="flex min-h-screen home-wrapper">

          <section className="grid w-full gap-8 home-section">
              <div className="md:col-span-1 xl:col-span-1">
                  <TradingViewWidget 
                  title="Market Overview" 
                  scriptURL={`${scripturl}market-overview.js`} 
                  config={MARKET_DATA_WIDGET_CONFIG}
                  className="custom-chart"
                  />
              </div>
              <div className="md-col-span xl:col-span-2">
                  <TradingViewWidget 
                  title="Stock Heatmap" 
                  scriptURL={`${scripturl}stock-heatmap.js`} 
                  config={HEATMAP_WIDGET_CONFIG}
                  className="custom-chart"
                  />
              </div> 
          </section>

           <section className="grid w-full gap-8 home-section">
              <div className="hfull md:col-span-1 xl:col-span-1">
                  <TradingViewWidget 
                  scriptURL={`${scripturl}timeline.js`} 
                  config={TOP_STORIES_WIDGET_CONFIG}
                  // className="custom-chart"
                  />
              </div>
              <div className="hfull md-col-span xl:col-span-2">
                  <TradingViewWidget 
                  scriptURL={`${scripturl}market-quotes.js`} 
                  config={MARKET_DATA_WIDGET_CONFIG}
                  // className="custom-chart"
                  />
              </div> 
          </section>
          {/* <Button> Click me </Button> */}
      </div>
    </>
  )
}

export default Home



// // <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container" style="height:100%;width:100%">
//   <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span class="blue-text">AAPL stock chart</span></a><span class="trademark"> by TradingView</span></div>
//   <script type="text/javascript" src="advanced-chart.js" async>
//   {
//   "allow_symbol_change": true,
//   "calendar": false,
//   "details": false,
//   "hide_side_toolbar": true,
//   "hide_top_toolbar": false,
//   "hide_legend": false,
//   "hide_volume": false,
//   "hotlist": false,
//   "interval": "D",
//   "locale": "en",
//   "save_image": true,
//   "style": "1",
//   "symbol": "NASDAQ:AAPL",
//   "theme": "dark",
//   "timezone": "Etc/UTC",
//   "backgroundColor": "#0F0F0F",
//   "gridColor": "rgba(242, 242, 242, 0.06)",
//   "watchlist": [],
//   "withdateranges": false,
//   "compareSymbols": [],
//   "studies": [],
//   "autosize": true
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->