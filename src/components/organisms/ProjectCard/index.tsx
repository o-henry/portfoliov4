import React from "react";
import { github, link, blog } from "@static/index";
import { useStyles } from "@styles/index";
import { useWidth } from "@hooks/index";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const ProjectCard = ({ itemCount, projectList, showMore }: any) => {
  const classes = useStyles();
  const width = useWidth();
  const numberOfItems = showMore ? itemCount : 3;

  return (
    <>
      <GridList cellHeight={150} className={classes.gridList}>
        {projectList
          .slice(0, numberOfItems)
          .map(
            (project: {
              name: any | undefined;
              git: string | undefined;
              youtube: string | undefined;
              blog: string | undefined;
              description: React.ReactNode;
              stack: React.ReactNode;
            }) => {
              return (
                <GridListTile
                  key={project.name}
                  rows={width == "xs" ? 2.3 : 2.4}
                  cols={
                    width == "xs"
                      ? 2
                      : width == "sm" || width == "md"
                      ? 1
                      : 0.66
                  }
                >
                  <div className="projectcard_layout">
                    <div className="projectcard_header">
                      <h3>{project.name}</h3>
                      <div className="projectcard_img_layout">
                        {project.git !== "" ? (
                          <div className="projectcard_img">
                            <a target="_blank" href={project.git}>
                              <img
                                className="stack_icon_style"
                                src={github}
                                alt="github"
                              />
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                        {project.youtube !== "" ? (
                          <div className="projectcard_img">
                            <a target="_blank" href={project.youtube}>
                              <img
                                className="stack_icon_style"
                                src={link}
                                alt="youtube"
                              />
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                        {project.blog !== "" ? (
                          <div className="projectcard_img">
                            <a target="_blank" href={project.blog}>
                              <img
                                className="stack_icon_style"
                                src={blog}
                                alt="blog"
                              />
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="projectcard_footer">
                      <p className="projectcard_body_style">
                        {project.description}
                      </p>
                    </div>
                    <footer className="projectcard_body_stack">
                      {project.stack}
                    </footer>
                  </div>
                </GridListTile>
              );
            }
          )}
      </GridList>
    </>
  );
};

export default ProjectCard;
