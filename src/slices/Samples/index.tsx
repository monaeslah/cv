"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TelescopeComponent from "./hover";
import useStyles from "../../generalAssets/styles/portfolio";
/**
 * Props for `Samples`.
 */
export type SamplesProps = SliceComponentProps<Content.SamplesSlice>;

/**
 * Component for "Samples" Slices.
 */
const Samples = ({ slice }: SamplesProps): JSX.Element => {
  const classes = useStyles();
  console.log("this is animation page", slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <p className={classes.title}>{slice.primary.title}</p>
      <div className={classes.animation}>
        <TelescopeComponent />
      </div>
    </section>
  );
};

export default Samples;
