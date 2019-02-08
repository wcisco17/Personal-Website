import React from 'react'
import styled from 'styled-components'

const ContainerProjects = styled.div`
	display: grid;
	overflow: hidden;
	grid-template-columns: 1fr;
	box-shadow: 0 40px 120px rgba(0, 0, 0, 0.1);
	grid-template-rows: repeat(${props => props.c}, 200px);
	grid-gap: 30px;
	&:hover {
		transform: scaleY(1.5);
		transition-timing-function: linear;
	  }
`






export default ({ children, c }) => {
	return (
		<ContainerProjects c={c} >
			{children}
		</ContainerProjects>
	)
}