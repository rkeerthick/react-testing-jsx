import { render, screen } from '@testing-library/react';
import Async from '../components/Async'

describe("async test suite", () => {
    test("render post if request", async () => {
        render(<Async />)
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)
    })
})