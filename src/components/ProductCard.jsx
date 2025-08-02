export default function ProductCard() {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://tse3.mm.bing.net/th/id/OIP.Hkobu4Yr8GH_0GkNTvkSOQHaFc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Roshogolla</h5>
                <p className="card-text">Onek mojar mishti, roshe vorti</p>
                <p className="fs-4 text-danger fw-bold">1000TK</p>
                <a href="#" className="btn btn-primary">Buy now</a>
            </div>
        </div>
    )
}