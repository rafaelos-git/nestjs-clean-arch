import { validate as uuidValidade } from "uuid"
import { Entity } from "../../entity"

type StubProps = {
    prop1: string
    prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe("Entity unit tests", () => {
    it("Should set props and id", () => {
        const props = { prop1: "value1", prop2: 15 }

        const entity = new StubEntity(props)

        expect(entity.props).toStrictEqual(props)
        expect(entity._id).not.toBeNull()
        expect(uuidValidade(entity._id)).toBeTruthy()
    })

    it("Should accept a valid id", () => {
        const props = { prop1: "value1", prop2: 15 }
        const id = "b1e0608c-fe33-4a4f-920a-cacdb98956ac"

        const entity = new StubEntity(props, id)

        expect(uuidValidade(entity._id)).toBeTruthy()
        expect(entity._id).toBe(id)
    })

    it("Should convert entity to a JSON", () => {
        const props = { prop1: "value1", prop2: 15 }
        const id = "b1e0608c-fe33-4a4f-920a-cacdb98956ac"

        const entity = new StubEntity(props, id)

        expect(entity.toJSON()).toStrictEqual({
            id,
            ...props,
        })
    })
})
