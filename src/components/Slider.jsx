export default function Slider() {
    return (
        <div id="carouselExample" className="carousel slide" >
  <div className="carousel-inner" style={{height: '500px'}}>
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/R.5a8eca3dfe98e263e122be0e47a1a585?rik=T%2btpAWfFndpC%2fg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-2QkTn1kko7o%2fUaeWADa3FLI%2fAAAAAAAACh8%2fTxTxTD3CeyI%2fs1600%2fresize.JPG&ehk=FdPvHYozPwj%2fmPUVU0P6PhAmVfgmUDVH3Ow4%2bqaTqus%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/TP/WQ/MN/9686448/spl-sweet-curd-1000x1000.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/NVA6tceBry0/maxresdefault.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}