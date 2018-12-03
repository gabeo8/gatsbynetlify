import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query moviesAllQuery {
        moviesAll {
          movies(order_by: [{ id: asc }]) {
            id
            name
            budget
            year
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.moviesAll.movies.map(item => (
          <div key={item.id}>
            <h1>
              {item.name} ---- {item.id}
            </h1>
          </div>
        ))}
      </div>
    )}
  />
)
