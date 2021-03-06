import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Remover</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.sobrenome}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>
                        Deletar
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter}
                />
            </table>
        )
    }
}

export default Table;