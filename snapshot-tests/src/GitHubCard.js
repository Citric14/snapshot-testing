import React from "react"
import Card from "react-bootstrap/Card"


function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src=https://static.wikia.nocookie.net/p__/images/b/b4/Gon-2011.png/revision/latest?cb=20210225162758&path-prefix=protagonist />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>George Henderson</Card.Title>
            <Card.Text>
            I work at consumers beverages, I like to play video games and drink beer.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard