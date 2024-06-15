/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Resume Template",
    description: "Created a custom resume template after making changes to source code",
    url: "https://devjangid15.github.io/resume_template/",
  },
  {
    title: "Dev Browser",
    description:
      "Build a custom chromium for android my own name and logo and changing default search engine to duckduckgo.com",
    url: "https://github.com/devjangid15/chromium-custom-build-android",
  },
  {
    title: "Fyle-FrontEnd Assignment",
    description: "Created a frontEnd page for Fyle as an assignment.Having slider hover and slider functionality on card and tiles",
    url: "https://devjangid15.github.io/fyleassignment.com/",
  },
  {
    title: "Uifry",
    description: "Just for learning with frontend works",
    url: "https://assignment-eksuz6ggd-devjangid15s-projects.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
