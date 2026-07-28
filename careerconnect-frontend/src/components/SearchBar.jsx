function SearchBar({
                       search,
                       setSearch,
                       sortBy,
                       setSortBy,
                   }) {
    return (
        <div className="row mb-3">

            <div className="col-md-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder="🔍 Search by Job Title or Company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="col-md-4">
                <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="title">Title (A-Z)</option>
                    <option value="company">Company (A-Z)</option>
                    <option value="salaryLow">Salary (Low → High)</option>
                    <option value="salaryHigh">Salary (High → Low)</option>
                </select>
            </div>

        </div>
    );
}

export default SearchBar;