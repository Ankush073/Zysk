const Feature = () =>{
      return (
            <div className="w-[1440px] h-auto py-24 gap-16   flex flex-col">
  {/* Container 1 */}
  <div className="w-[1280px] h-auto px-8 gap-8   flex flex-col">
    {/* Subcontainer 1 (sc1) */}
    <div className="w-[1216px] h-auto gap-12   flex">
      {/* hc1 */}
      <div className="w-[768px] h-auto gap-5   flex flex-col">
        {/* hs1 */}
        <div className="w-[768px] h-auto gap-3   flex flex-col items-center">
          {/* Subheading 1 */}
          <div className="w-[768px] h-6   text-center text-md font-semibold leading-6 underline decoration-skip-ink-none">
            Features
          </div>

          {/* Subheading 2 */}
          <div className="w-[768px] h-11   text-center text-[36px] font-semibold leading-[44px] tracking-[-0.02em]">
            Analytics that feels like it’s from the future
          </div>
        </div>

        {/* Supported Text */}
        <div className="w-[768px] h-[60px]   text-center text-xl font-normal leading-[30px]">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </div>
      </div>
    </div>
  </div>

  {/* Container 2 */}
  <div className="w-[1280px] h-auto px-8 gap-16   flex flex-col">
    {/* Subcontainer 01 */}
    <div className="w-[1216px] h-auto gap-8   flex">
      {/* Feature Text 1 */}
      <div className="w-[384px] h-auto gap-5   flex flex-col items-center">
        <div className="relative  ">
          <img
            src="path_to_your_icon_image.png"
            alt="Feature Icon"
            className="w-[48px] h-[48px] rounded-tl-[10px] border-t-[1px] border-l-0 border-r-0 border-b-0"
          />
        </div>
        
        {/* ts1 (Feature Text 1) */}
        <div className="w-[384px] h-auto gap-2   flex flex-col items-center">
          {/* text1 */}
          <div className="w-[384px] h-[30px]   text-center text-xl font-semibold leading-[30px]">
            Share team inboxes
          </div>

          {/* text2 */}
          <div className="w-[384px] h-[72px]   text-center text-md font-normal leading-[24px]">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </div>
        </div>
      </div>

      {/* Feature Text 2 */}
      <div className="w-[384px] h-auto gap-5   flex flex-col items-center">
        <div className="relative  ">
          <img
            src="path_to_your_icon_image.png"
            alt="Feature Icon"
            className="w-[48px] h-[48px] rounded-tl-[10px] border-t-[1px] border-l-0 border-r-0 border-b-0"
          />
        </div>
        
        {/* ts2 (Feature Text 2) */}
        <div className="w-[384px] h-auto gap-2   flex flex-col items-center">
          {/* text1 */}
          <div className="w-[384px] h-[30px]   text-center text-xl font-semibold leading-[30px]">
            Collaborative workflows
          </div>

          {/* text2 */}
          <div className="w-[384px] h-[72px]   text-center text-md font-normal leading-[24px]">
            Streamline teamwork with shared inboxes and get things done faster.
          </div>
        </div>
      </div>

      {/* Feature Text 3 */}
      <div className="w-[384px] h-auto gap-5   flex flex-col items-center">
        <div className="relative  ">
          <img
            src="path_to_your_icon_image.png"
            alt="Feature Icon"
            className="w-[48px] h-[48px] rounded-tl-[10px] border-t-[1px] border-l-0 border-r-0 border-b-0"
          />
        </div>
        
        {/* ts3 (Feature Text 3) */}
        <div className="w-[384px] h-auto gap-2   flex flex-col items-center">
          {/* text1 */}
          <div className="w-[384px] h-[30px]   text-center text-xl font-semibold leading-[30px]">
            Unified communication
          </div>

          {/* text2 */}
          <div className="w-[384px] h-[72px]   text-center text-md font-normal leading-[24px]">
            Bring all communication together in one place and keep everyone aligned.
          </div>
        </div>
      </div>
    </div>

    {/* Subcontainer 02 */}
    <div className="w-[1216px] h-auto gap-8   flex">
      {/* Feature Text 4 */}
      <div className="w-[384px] h-auto gap-5   flex flex-col items-center">
        <div className="relative  ">
          <img
            src="path_to_your_icon_image.png"
            alt="Feature Icon"
            className="w-[48px] h-[48px] rounded-tl-[10px] border-t-[1px] border-l-0 border-r-0 border-b-0"
          />
        </div>
        
        {/* ts4 (Feature Text 4) */}
        <div className="w-[384px] h-auto gap-2   flex flex-col items-center">
          {/* text1 */}
          <div className="w-[384px] h-[30px]   text-center text-xl font-semibold leading-[30px]">
            Real-time updates
          </div>

          {/* text2 */}
          <div className="w-[384px] h-[72px]   text-center text-md font-normal leading-[24px]">
            Get notified instantly and keep your team on track with real-time updates.
          </div>
        </div>
      </div>

      {/* Feature Text 5 */}
      <div className="w-[384px] h-auto gap-5   flex flex-col items-center">
        <div className="relative  ">
          <img
            src="path_to_your_icon_image.png"
            alt="Feature Icon"
            className="w-[48px] h-[48px] rounded-tl-[10px] border-t-[1px] border-l-0 border-r-0 border-b-0"
          />
        </div>
        
        {/* ts5 (Feature Text 5) */}
        <div className="w-[384px] h-auto gap-2   flex flex-col items-center">
          {/* text1 */}
          <div className="w-[384px] h-[30px]   text-center text-xl font-semibold leading-[30px]">
            Seamless integrations
          </div>

          {/* text2 */}
          <div className="w-[384px] h-[72px]   text-center text-md font-normal leading-[24px]">
            Easily connect your favorite apps and tools for a seamless workflow.
          </div>
        </div>
      </div>

      {/* Feature Text 6 */}
      <div className="w-[384px] h-auto gap-5   flex flex-col items-center">
        <div className="relative  ">
          <img
            src="path_to_your_icon_image.png"
            alt="Feature Icon"
            className="w-[48px] h-[48px] rounded-tl-[10px] border-t-[1px] border-l-0 border-r-0 border-b-0"
          />
        </div>
        
        {/* ts6 (Feature Text 6) */}
        <div className="w-[384px] h-auto gap-2   flex flex-col items-center">
          {/* text1 */}
          <div className="w-[384px] h-[30px]   text-center text-xl font-semibold leading-[30px]">
            Priority support
          </div>

          {/* text2 */}
          <div className="w-[384px] h-[72px]   text-center text-md font-normal leading-[24px]">
            Receive dedicated support to ensure your team stays up and running.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      )
}
export default Feature