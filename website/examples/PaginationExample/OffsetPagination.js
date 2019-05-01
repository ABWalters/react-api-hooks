class OffsetPagination {
  constructor(data, params, updateParams, pageSize) {
    this.data = data;
    this.params = params;
    this.updateParams = updateParams;
    this.pageSize = pageSize;
  }
  onNext = () => this.updateParams({ startIndex: this.getCurrentOffset() + this.pageSize });
  onPrevious = () => this.updateParams({ startIndex: this.getCurrentOffset() - this.pageSize });
  hasPreviousPage = () => this.params.startIndex || 0 > 0;
  hasNextPage = () => this.data.length === this.pageSize;
  getCurrentOffset = () => this.params.startIndex || 0;
  getPageCnt = () => Math.round(this.getCurrentOffset() / this.pageSize) + 1;
}

export default OffsetPagination;
