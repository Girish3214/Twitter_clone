import React from "react";
import useStyles from "../styles/WhatsHappenStyle";
import {Link} from 'react-router-dom'

const Policy = () => {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.policyContainer}>
        <>
          <p>
            <Link to="#" target="_blank">
              Terms of Service
            </Link>
          </p>
        </>
        <>
          <p>
            <Link to="#" target="_blank">
              Privacy Policy
            </Link>
          </p>
        </>
        <>
          <p>
            <Link to="#" target="_blank">
              Cookie Policy
            </Link>
          </p>
        </>
        <>
          <p>
            <Link to="#" target="_blank">
              Ads info
            </Link>
          </p>
        </>

        <>
          <p>
            <Link to="#" target="_blank">
              &copy; 2021 Twitter, Inc.
            </Link>
          </p>
        </>
      </div>
    </footer>
  );
};

export default Policy;
