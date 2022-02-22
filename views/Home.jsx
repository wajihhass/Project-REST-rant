const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
                      <h1>HOME</h1>
                      <div>
                  <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" class="center" />
                  <div>
                  <h2 class="cent">Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a></h2>
                </div>
                </div>
                      <a href="/places">
                      <button className="btn-primary">Places Page</button>
                      </a>
          </main>
      </Def>
    )
  }

module.exports = home

/*
/*88888  <main>
    <h1>HOME</h1>
    <div>
      <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
      <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>*/
/*
const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
*/