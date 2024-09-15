import React from "react";

const Citas: React.FC = () => {
    return(
        <div className="container" id="citas">
		<h2>Citas</h2>
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Code</th>
					<th>Description</th>
					<th>UOM</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>NU-CH-000001</td>
					<td>Chocolate chip cookies</td>
					<td>Pack</td>
					<td>
						<a href="#" className="btn btn-default">Edit</a> &nbsp; 
						<a href="#" className="btn btn-default">Default</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    );
}

export default Citas