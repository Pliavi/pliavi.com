import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Card = styled(Link)`
  --border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.3rem;
  border-radius: var(--border-radius);
  gap: 1.3rem;
  text-decoration: none;

  &:first-child {
    --title-font-size: 2rem;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    grid-column: 1 / span 3;
    .post-cover {
      height: 320px;
    }
  }

  &:hover {
    background: var(--light-gray);
  }
`

const Cover = styled.div`
  place-items: center;
  width: 100%;
  height: 200px;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 5px #0002;

  > img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    object-fit: cover;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    box-shadow: inset 0 2px 1px #fff2;
  }
`

const About = styled.div`
  flex: 1;
  > .title {
    font-size: var(--text-3xl);
    font-weight: bold;
    margin-bottom: 1rem;
  }
  > .date {
    color: var(--secondary-fg);
    font-size: var(--text-sm);
  }
  > .description {
    font-size: var(--text-md);
    color: var(--dark-fg);
  }
`

const PostCard = ({ slug, cover, title, description, date }) => (
  <Card key={slug} to={slug}>
    <Cover className="post-cover">
      <img src={cover} alt="imagem de amostra" />
    </Cover>

    <About>
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
      <small className="date">{date}</small>
    </About>
  </Card>
)

export default PostCard
