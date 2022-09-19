class Vod {

    constructor(_parent, _item) {
        this.parent = _parent;

        this.img = _item.show.image?.medium || "https://images.pexels.com/photos/5428828/pexels-photo-5428828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        this.name = _item.show.name;
        this.score = _item.score;
        this.genere = _item.show.genres;
        this.info = _item.show.summary;
        this.date = _item.show.premiered;
    }

    render() {
        let div = document.createElement("div");
        div.className = "col-md-6 p-2";
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
                        <div class="shadow overflow-hidden shadow-lg p-4">
                        <img src="${this.img}" class="float-end border border-dark ms-2 w-25">
                        <h3>${this.name}</h3>
                        <div>Score:${(this.score * 10).toFixed(1)}</div>
                        <div>Date:${this.date}</div>
                        <div>Genere: ${this.genere}</div>
                        <button class="btn btn-dark">more info</button>
                        </div>
        `;

        let click = div.querySelector("button");
        click.addEventListener("click", function () {
            this.info = this.info.replace("<p>", "");
            this.info = this.info.replace("</p>", "");
            alert(this.info);
        }.bind(this))
    }

}