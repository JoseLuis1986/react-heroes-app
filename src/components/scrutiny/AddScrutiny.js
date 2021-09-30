import React from 'react'

export const AddScrutiny = () => {
return (
<div class="container pt-4">
    <div class="row">
        <div class="col-lg-6 mx-auto">
            <div class="card text-center ">
                <div class="card-header bg-dark">
                    <h3>
                        Añadir Escrutinio
                    </h3>
                </div>
                <div class="card-body">
                    <form action="/list">
                        <label for="cars" class="">Draw:</label>
                        <div class="form-group pt-3">
                            <select id="draw" name="draw" class="form-control" required>
                                <option value="" disabled selected>Select your option</option>
                                <option value="Nt">Nacional tarde</option>
                                <option value="NN">Nacional Noche</option>
                                <option value="Ld">Leidsa</option>
                                <option value="Ltk">Loteka</option>
                            </select>
                        </div>
                        <div class="form-group pt-3"> 
                            <input type="date" id="start" name="draw_date" placeholder="date" class="form-control" required />
                        </div>
                        <div class="form-group pt-3">
                            <input type="text" maxlength="2" name="ballot1" placeholder="Ballot 1" class="form-control" required />
                        </div>
                        <div class="form-group pt-3">
                            <input type="text" maxlength="2" name="ballot2" placeholder="Ballot 2" class="form-control" required />
                        </div>
                        <div class="form-group pt-3">
                            <input type="text" maxlength="2" name="ballot3" placeholder="Ballot 3" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary col-12 mt-3">
                                GRABAR
                            </button>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success col-12 mt-3">
                                Grabar y añadir otro
                            </button>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success col-12 mt-3">
                                Grabar y continuar editando
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
)
}