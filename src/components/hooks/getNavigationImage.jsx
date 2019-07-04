import { graphql, useStaticQuery } from 'gatsby'

const getNavigationImage = () => {
	// noinspection Annotator
	const image = useStaticQuery(
		graphql`
            query profileImage {
                profileImage: file(relativePath: { eq: "Profile.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 32) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
		`,
	)

	return image.profileImage.childImageSharp.fluid
}

export default getNavigationImage
