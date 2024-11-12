import bannerImg from "../../assets/banner-1.jpg";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end ">
        <img src={bannerImg} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-5xl font-medium mb-7">
          New Releases This Weak
        </h1>
        <p className="mb-10">
          It time to update your reading list with some of the latest and
          gratest releses in the literary world . From heart-pumping thrilers to
          captivationg memories, this week new releases offer something for
          everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
}

export default Banner;
