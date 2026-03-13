'use client'

import { TextField, Button, Select, MenuItem } from "@mui/material"
import DateReserve from "@/components/DateReserve"

export default function Page(){

    return(
        <main>

            <form>

                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                />

                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                />

                <Select
                    id="venue"
                    variant="standard"
                >

                    <MenuItem value="Bloom">
                        The Bloom Pavilion
                    </MenuItem>

                    <MenuItem value="Spark">
                        Spark Space
                    </MenuItem>

                    <MenuItem value="GrandTable">
                        The Grand Table
                    </MenuItem>

                </Select>

                <DateReserve/>

                <Button
                    variant="contained"
                    name="Book Venue"
                >
                    Book Venue
                </Button>

            </form>

        </main>
    )
}