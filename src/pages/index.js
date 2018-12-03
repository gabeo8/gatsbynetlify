import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
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
      <Layout>
        <main id="content" role="main">
          <div
            class="d-lg-flex"
            style={{
              background:
                'url(https://ucarecdn.com/2f0f998a-dfbe-41b6-91fd-097e1ac59ac7/bg4.png) no-repeat right',
            }}
          >
            <div class="container d-lg-flex align-items-lg-center min-height-lg-100vh space-bottom-2 space-top-4 space-bottom-lg-3 space-lg-0">
              <div class="w-lg-60 w-xl-50 mt-lg-9">
                <div class="mb-6">
                  <h1 class="h2 text-white font-weight-normal">
                    Trusted by over 33 500 people
                  </h1>
                  <p class="text-white-70">
                    Innovative and functional web template product – Front
                    brought to you by Htmlstream, a bunch of geeks scattered all
                    around the world.
                  </p>
                  <p class="text-white-70">
                    We also offer affordable, professional and trendy customized
                    design solutions, solely for your own project!
                  </p>
                </div>

                <a
                  class="btn btn-white btn-wide text-primary transition-3d-hover"
                  href="/"
                >
                  Hire Us
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* {data.moviesAll.movies.map(item => (
          <div key={item.id}>
            <h1>
              {item.name} ---- {item.id}
            </h1>
          </div>
        ))} */}
      </Layout>
    )}
  />
)
