import styled from 'styled-components'

export const TodoLi = styled.li`

	
display: grid;
grid-template-columns: 40% 30% 30%;
grid-template-rows: auto;

.text {
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
}

button {
  width: 40px;
}
`
